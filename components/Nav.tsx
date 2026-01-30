import { motion } from "framer-motion";
import { Container } from "./Container";
import { Button } from "./Button";
import { nav } from "../lib/content";

export function Nav() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-white/10 ring-1 ring-white/15" />
            <span className="text-sm font-semibold tracking-wide">corp-bool™</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {nav.map((i) => (
              <a key={i.href} href={i.href} className="text-sm text-white/75 hover:text-white">
                {i.label}
              </a>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>
            <Button href="#pricing">Get pricing</Button>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
