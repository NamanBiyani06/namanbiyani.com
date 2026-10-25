import { fira } from "@/components/Footer/footer";

const linkClass = "underline decoration-2 underline-offset-4 transition-colors duration-300 ease-in-out";

export default function Intro() {
  return (
    <div className="pt-4 px-2 text-sm leading-relaxed space-y-3">
      <p>
        I&apos;m currently an engineering intern at{" "}
        <a href="https://www.allium.so/" target="_blank" rel="noopener noreferrer" className={`${linkClass} decoration-fuchsia-400/30 hover:decoration-fuchsia-400`}>Allium</a>,
        building performant systems.
      </p>
      <p>
        Previously, I&apos;ve spent time working on ML at{" "}
        <a href="https://www.shopify.com/" target="_blank" rel="noopener noreferrer" className={`${linkClass} decoration-green-400/30 hover:decoration-green-400`}>Shopify</a>{" "}
        and data science at the{" "}
        <a href="https://www.ohri.ca/" target="_blank" rel="noopener noreferrer" className={`${linkClass} decoration-sky-400/30 hover:decoration-sky-400`}>Ottawa Hospital Research Institute</a>.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Feel free to reach out anytime at <span className={`${fira.className} tracking-tighter`}>nbiyani [at] uwaterloo [dot] ca</span>.
      </p>
    </div>
  );
}
