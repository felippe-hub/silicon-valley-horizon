import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="glass flex flex-col items-center justify-between gap-4 px-6 py-11 md:flex-row md:px-14"
    style={{ borderTop: "1px solid var(--border-color)" }}
  >
    <motion.img
      src="/letsdoc-white.svg"
      alt="Lets!DOC"
      className="h-7 w-auto"
      whileHover={{ scale: 1.05 }}
    />
    <p className="text-[13px] text-[--muted]">© {new Date().getFullYear()} Lets!DOC. Todos os direitos reservados.</p>
    <p className="text-[13px] text-[--muted]">Marketing médico especializado</p>
  </motion.footer>
);

export default Footer;
