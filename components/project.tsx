import Image from "next/image";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

export default function Project({ data, activeTab }: any) {
  const filteredData = data.filter((item: any) =>
    item.tabs.includes(activeTab),
  );

  return (
    <>
      {filteredData.length === 0 && (
        <p className="text-center font-medium text-rose-500">No website yet.</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.slice(0, 6).map((item: any, i: any) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                ease: easeInOut,
                duration: 0.4,
                delay: 0.1 * i,
              },
            }}
            className="shadow-md shadow-black/10 dark:shadow-white/10 relative overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-br from-blue-200/50 dark:from-sky-800/50 dark:border-sky-900">
            <div className="h-52 w-full overflow-hidden shadow-md shadow-sky-900/20">
              <a href={item.link} target="_blank">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  quality={95}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-125"
                />
              </a>
            </div>

            <div className="space-y-3 p-4">
              <p className="text-xs italic text-secondary font-medium">
                {item.tabs.includes("All")
                  ? item.tabs.filter((tag: any) => tag !== "All").join(", ")
                  : item.tabs.join(", ")}
              </p>
              <div className="space-y-2">
                <a
                  href={item.link}
                  className="text-lg font-bold hover:underline hover:text-secondary line-clamp-1 w-fit">
                  {item.title}
                </a>
                <p className="text-sm line-clamp-2 text-primary/60 dark:text-blue-50/60">
                  {item.content}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredData.length > 6 && (
        <div className="py-3 text-center">
          <Link
            href="projects"
            className="text-sm italic font-medium hover:underline hover:text-secondary">
            See more projects...
          </Link>
        </div>
      )}
    </>
  );
}
