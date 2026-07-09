<template>
  <section id="contact" class="py-24">
    <div class="section-wrap">
      <div class="reveal premium-border relative overflow-hidden rounded-[2rem] border border-sky-300/20 bg-[#0a1728] p-8 text-center shadow-[0_40px_120px_rgba(0,124,195,0.18)] md:p-14">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,124,195,0.24),transparent_34rem),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        <div class="relative">
          <div class="logo-surface mx-auto mb-7 w-fit px-4 py-3">
            <BrandLogo />
          </div>
          <span class="section-eyebrow">Start a Conversation</span>
          <h2 class="font-display mx-auto mt-6 max-w-3xl text-[clamp(2rem,4.2vw,4.15rem)] font-extrabold leading-[1.04] text-white">
            Ready to Build Your Next Digital Product?
          </h2>
          <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">Let's transform your ideas into scalable software.</p>
          <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <NuxtLink to="/contact" class="btn-primary">Start Project</NuxtLink>
            <a href="mailto:hello@cloftware.com?subject=Book%20a%20Free%20Consultation" class="btn-secondary">Book Free Consultation</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
