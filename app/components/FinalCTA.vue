<template>
  <section id="contact" class="py-24">
    <div class="section-wrap">
      <div
        class="relative overflow-hidden rounded-[36px] border border-sky-400/15 bg-gradient-to-b from-[#10233c] to-[#091524] p-10 md:p-16 text-center shadow-[0_35px_100px_rgba(0,120,255,.18)]"
      >
        <!-- Background Glow -->
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,153,255,.22),transparent_45%)]"
        />

        <div class="relative z-10">

          <!-- Logo + Badge -->
          <div class="mb-10 flex flex-col items-center justify-center gap-5">

            <div
              class="rounded-2xl bg-white/95 p-5 shadow-2xl backdrop-blur"
            >
              <BrandLogo class="h-14 w-auto" />
            </div>

            <span
              class="rounded-full border border-sky-400/20 bg-sky-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-300"
            >
              Start a Conversation
            </span>

          </div>

          <h2
            class="mx-auto max-w-4xl font-display text-[clamp(2.4rem,5vw,4.5rem)] font-extrabold leading-tight text-white"
          >
            Ready to Build Your
            <span class="text-sky-400">
              Next Digital Product?
            </span>
          </h2>

          <p
            class="mx-auto mt-7 max-w-2xl text-xl leading-9 text-slate-300"
          >
            Let's transform your ideas into scalable software with modern Web,
            Mobile, Cloud and AI solutions.
          </p>

          <div
            class="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
          >
            <NuxtLink
              to="/contact"
              class="btn-primary min-w-[220px]"
            >
              Start Project
            </NuxtLink>

            <a
              href="mailto:hello@cloftware.com"
              class="btn-secondary min-w-[220px]"
            >
              Book Free Consultation
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>