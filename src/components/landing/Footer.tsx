import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] bg-lets-black px-6 py-11 md:flex-row md:px-14"
  >
    <motion.img
      src="/letsdoc-white.svg"
      alt="Lets!DOC"
      className="h-7 w-auto"
      whileHover={{ scale: 1.05 }}
    />
    <p className="text-[13px] text-white/40">© {new Date().getFullYear()} Lets!DOC. Todos os direitos reservados.</p>
    <p className="text-[13px] text-white/40">Marketing médico especializado</p>
  </motion.footer>
);

export default Footer;