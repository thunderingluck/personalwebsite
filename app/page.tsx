'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { SurrealAura } from '@/components/ui/surreal-aura'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col space-y-10 pb-6 md:space-y-14 md:pb-2"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={{ duration: 0.25 }}
        className="relative"
      >
        <div className="absolute inset-0 -z-10" aria-hidden>
          <motion.div
            className="absolute -left-20 top-6 h-48 w-48 rounded-full bg-gradient-to-br from-cyan-200/60 via-sky-200/50 to-indigo-200/50 blur-3xl dark:from-cyan-400/25 dark:via-sky-500/25 dark:to-indigo-500/25"
            animate={{ x: [-10, 12, -6], y: [6, -12, 10], rotate: [0, 6, -5] }}
            transition={{ duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-4 top-1/3 h-44 w-44 rounded-full bg-gradient-to-br from-amber-200/50 via-pink-200/60 to-purple-200/40 blur-3xl dark:from-amber-300/15 dark:via-pink-400/20 dark:to-purple-500/20"
            animate={{ x: [8, -10, 4], y: [-12, 16, -14], scale: [1, 1.08, 0.98] }}
            transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          />
        </div>

        <div className="surface-card p-8 md:p-12">
          <SurrealAura className="absolute inset-0 opacity-70" />
          <div className="absolute inset-0 bg-grid-faint" aria-hidden />

          <div className="relative grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5 md:space-y-6">
              <p className="inline-flex items-center gap-2 self-start rounded-full bg-white/70 px-3 py-1 text-sm font-medium text-sky-700 shadow-sm shadow-sky-100/60 ring-1 ring-sky-100/80 backdrop-blur-md dark:bg-white/5 dark:text-sky-100 dark:ring-white/10">
                Available for new opportunities
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-5xl">
                Hi, I&apos;m Nim.
              </h1>
              <p className="max-w-2xl text-lg text-slate-700 dark:text-slate-300">
                I design and build digital products with thoughtful motion and accessible interactions. Exploring human-centric interfaces and playful visual systems to turn ideas into tangible stories.
              </p>
              <div className="flex flex-wrap gap-3">
                <Magnetic springOptions={{ bounce: 0 }} intensity={0.4}>
                  <Link
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-base font-medium text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-[1px] hover:shadow-xl hover:shadow-slate-900/25 dark:bg-slate-100 dark:text-slate-900"
                  >
                    Get in touch
                    <span aria-hidden>↗</span>
                  </Link>
                </Magnetic>
                <Magnetic springOptions={{ bounce: 0 }} intensity={0.4}>
                  <Link
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-5 py-2.5 text-base font-medium text-slate-800 shadow-sm transition hover:-translate-y-[1px] hover:border-slate-200 hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:text-white"
                  >
                    View work
                  </Link>
                </Magnetic>
              </div>
            </div>

            <div className="relative flex flex-col gap-4 rounded-2xl border border-white/70 bg-white/70 p-5 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.5)] ring-1 ring-white/60 backdrop-blur-2xl dark:border-white/10 dark:bg-white/5 dark:ring-white/5">
              <SurrealAura density="sparse" className="absolute inset-0 opacity-60" />
              <div className="relative flex items-center justify-between rounded-2xl bg-gradient-to-br from-white/70 via-white/60 to-sky-50/80 p-4 ring-1 ring-white/60 backdrop-blur-xl dark:from-white/5 dark:via-white/0 dark:to-cyan-500/5 dark:ring-white/10">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-500 dark:text-slate-300/70">Currently crafting</p>
                  <p className="text-base font-medium text-slate-900 dark:text-white">Playful product experiences</p>
                </div>
                <Spotlight className="h-16 w-16" />
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-200">
                <div className="rounded-xl border border-white/70 bg-white/70 p-3 shadow-sm ring-1 ring-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:ring-white/5">
                  <p className="text-xs text-slate-500 dark:text-slate-300/70">Specialty</p>
                  <p className="font-medium">Design systems</p>
                </div>
                <div className="rounded-xl border border-white/70 bg-white/70 p-3 shadow-sm ring-1 ring-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:ring-white/5">
                  <p className="text-xs text-slate-500 dark:text-slate-300/70">Focus</p>
                  <p className="font-medium">Motion UI</p>
                </div>
                <div className="rounded-xl border border-white/70 bg-white/70 p-3 shadow-sm ring-1 ring-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:ring-white/5">
                  <p className="text-xs text-slate-500 dark:text-slate-300/70">Experience</p>
                  <p className="font-medium">7+ years</p>
                </div>
                <div className="rounded-xl border border-white/70 bg-white/70 p-3 shadow-sm ring-1 ring-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:ring-white/5">
                  <p className="text-xs text-slate-500 dark:text-slate-300/70">Location</p>
                  <p className="font-medium">Remote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="surface-card overflow-hidden p-6 md:p-8">
          <SurrealAura density="sparse" className="absolute inset-0 opacity-70" />
          <div className="absolute inset-0 bg-noise-soft" aria-hidden />

          <div className="relative mb-6 flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Selected Projects</h3>
            <span className="hidden rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-white/60 backdrop-blur dark:bg-white/5 dark:text-slate-200 dark:ring-white/10 md:inline-flex">
              Showcase
            </span>
          </div>
          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-7">
            {PROJECTS.map((project) => (
              <div key={project.name} className="group relative space-y-3 overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-2 ring-1 ring-white/60 backdrop-blur-2xl transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-white/5 dark:ring-white/10">
                <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-sky-200/60 via-indigo-200/50 to-purple-200/40 blur-3xl opacity-40 transition duration-500 group-hover:opacity-70 dark:from-sky-500/15 dark:via-indigo-500/15 dark:to-purple-500/15" aria-hidden />
                <div className="relative rounded-xl bg-white/70 p-1 ring-1 ring-white/60 backdrop-blur-xl dark:bg-white/5 dark:ring-white/10">
                  <ProjectVideo src={project.video} />
                </div>
                <div className="relative px-1 pb-2">
                  <a
                    className="font-base group relative inline-block font-[450] text-slate-900 dark:text-zinc-50"
                    href={project.link}
                    target="_blank"
                  >
                    {project.name}
                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-slate-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                  </a>
                  <p className="text-base text-slate-600 dark:text-zinc-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="surface-card overflow-hidden p-6 md:p-8">
          <SurrealAura density="sparse" className="absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-noise-soft" aria-hidden />

          <div className="relative mb-5 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Work Experience</h3>
            <div className="hidden rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-white/60 backdrop-blur dark:bg-white/5 dark:text-slate-200 dark:ring-white/10 md:inline-flex">
              Journey
            </div>
          </div>
          <div className="relative flex flex-col space-y-3">
            {WORK_EXPERIENCE.map((job) => (
              <a
                className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/75 p-[1px] ring-1 ring-white/70 backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-white/5 dark:ring-white/10"
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                key={job.id}
              >
                <div className="absolute -left-12 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-200/60 via-sky-200/40 to-indigo-200/50 blur-3xl opacity-40 transition duration-500 group-hover:opacity-70 dark:from-emerald-400/15 dark:via-sky-500/15 dark:to-indigo-500/15" aria-hidden />
                <div className="relative h-full w-full rounded-[15px] bg-white/80 p-4 ring-1 ring-white/70 backdrop-blur-2xl dark:bg-white/5 dark:ring-white/10">
                  <div className="relative flex w-full flex-row justify-between">
                    <div>
                      <h4 className="font-normal text-slate-900 dark:text-zinc-100">
                        {job.title}
                      </h4>
                      <p className="text-slate-500 dark:text-zinc-400">
                        {job.company}
                      </p>
                    </div>
                    <p className="text-slate-600 dark:text-zinc-400">
                      {job.start} - {job.end}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="surface-card overflow-hidden p-6 md:p-8">
          <SurrealAura density="sparse" className="absolute inset-0 opacity-70" />
          <div className="absolute inset-0 bg-grid-faint" aria-hidden />

          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Blog</h3>
          <div className="relative flex flex-col space-y-0">
            <AnimatedBackground
              enableHover
              className="h-full w-full rounded-2xl border border-white/70 bg-white/70 ring-1 ring-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:ring-white/10"
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2,
              }}
            >
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.uid}
                  className="-mx-3 rounded-xl px-3 py-3 transition hover:bg-white/70 dark:hover:bg-white/5"
                  href={post.link}
                  data-id={post.uid}
                >
                  <div className="flex flex-col space-y-1">
                    <h4 className="font-normal text-slate-900 dark:text-zinc-100">
                      {post.title}
                    </h4>
                    <p className="text-slate-500 dark:text-zinc-400">
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}
            </AnimatedBackground>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="surface-card overflow-hidden p-6 md:p-8">
          <SurrealAura density="sparse" className="absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-noise-soft" aria-hidden />

          <h3 className="mb-5 text-xl font-semibold text-slate-900 dark:text-white">Connect</h3>
          <p className="mb-5 text-slate-600 dark:text-zinc-400">
            Feel free to contact me at{' '}
            <a
              className="underline decoration-slate-400 decoration-dashed underline-offset-2 dark:text-zinc-300"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </a>
          </p>
          <div className="flex flex-wrap items-center justify-start gap-3">
            {SOCIAL_LINKS.map((link) => (
              <MagneticSocialLink key={link.label} link={link.link}>
                {link.label}
              </MagneticSocialLink>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}
