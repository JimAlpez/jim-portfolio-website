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
          <motion.a
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
            href={item.link}
            target="_blank"
            className="group shadow-md shadow-black/10 dark:shadow-white/10 relative overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-br from-blue-200/50 dark:from-sky-800/50 dark:border-sky-900">
            <div className="h-60 w-full overflow-hidden shadow-md shadow-sky-900/20">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                quality={95}
                className="w-full h-full object-cover transition-all duration-500 md:group-hover:scale-125"
              />
            </div>

            <div className="space-y-2 py-3 px-4 bg-blue-50 dark:bg-sky-950 absolute bottom-0 md:bottom-[-42px] md:group-hover:bottom-0 transition-all duration-500 ease left-0 w-full">
              <h3 className="font-bold line-clamp-1">{item.title}</h3>
              <p className="text-xs line-clamp-2 text-primary/60 dark:text-blue-50/60">
                {item.content}
              </p>
            </div>
          </motion.a>
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
