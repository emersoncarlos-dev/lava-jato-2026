import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, Clock, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
];

const WHATSAPP_NUMBER = "5581993784501";

const ScheduleSection = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();

  const handleSchedule = () => {
    if (!date || !time) return;

    const formattedDate = format(date, "dd/MM/yyyy", { locale: ptBR });
    const dayName = format(date, "EEEE", { locale: ptBR });
    const message = `Olá! Gostaria de agendar um atendimento para *${dayName}, ${formattedDate}* às *${time}*. Podem confirmar a disponibilidade?`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");

    // Limpar os campos após abrir o WhatsApp
    setDate(undefined);
    setTime(undefined);
  };

  const isDateDisabled = (d: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return d < today || d.getDay() === 0;
  };

  return (
    <section id="agendar" className="py-24 md:py-32 bg-secondary">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
            Agende seu horário
          </p>
          <h2 className="font-display text-5xl md:text-7xl tracking-wider">
            AGENDAMENTO
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-md mx-auto text-sm">
            Escolha a data e horário desejados e confirme pelo WhatsApp
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card-gradient border border-border rounded-sm p-8 md:p-10 shadow-card space-y-8">
            {/* Step 1: Date */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center text-primary font-display text-lg">
                  1
                </span>
                <span className="font-body text-sm uppercase tracking-widest text-foreground font-medium">
                  Escolha a data
                </span>
              </div>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-body h-12 border-border bg-secondary hover:bg-muted",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-3 h-4 w-4 text-primary" />
                    {date
                      ? format(date, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                      : "Selecione uma data"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isDateDisabled}
                    locale={ptBR}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Step 2: Time */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center text-primary font-display text-lg">
                  2
                </span>
                <span className="font-body text-sm uppercase tracking-widest text-foreground font-medium">
                  Escolha o horário
                </span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setTime(slot)}
                    className={cn(
                      "font-body text-sm py-2.5 rounded-sm border transition-all duration-200",
                      time === slot
                        ? "bg-primary text-primary-foreground border-primary shadow-red-glow"
                        : "bg-secondary border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    )}
                  >
                    <Clock className="inline-block w-3 h-3 mr-1 -mt-0.5" />
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Confirm */}
            <div className="pt-4 border-t border-border">
              {date && time && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-body text-sm text-muted-foreground mb-4 text-center"
                >
                  Agendamento para{" "}
                  <span className="text-foreground font-medium">
                    {format(date, "dd/MM/yyyy", { locale: ptBR })}
                  </span>{" "}
                  às{" "}
                  <span className="text-foreground font-medium">{time}</span>
                </motion.p>
              )}

              <button
                onClick={handleSchedule}
                disabled={!date || !time}
                className={cn(
                  "w-full flex items-center justify-center gap-3 py-4 rounded-sm font-body font-bold uppercase tracking-widest text-sm transition-all duration-200",
                  date && time
                    ? "bg-primary text-primary-foreground hover:opacity-90 shadow-red-glow cursor-pointer"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                )}
              >
                Confirmar pelo WhatsApp
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;