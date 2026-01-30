import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/65">
            <span className="font-semibold text-white">corp-bool™</span>{" "}
            <span className="text-white/45">— Professional Grade Boolean-as-a-Service</span>
          </div>
          <div className="text-sm text-white/55">
            © {new Date().getFullYear()} corp-bool. All rights reserved. Truth sold separately.
          </div>
        </div>
      </Container>
    </footer>
  );
}
