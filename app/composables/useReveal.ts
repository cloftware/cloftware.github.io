export const useReveal = () => {
  onMounted(async () => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-count-to]'))
    const { gsap } = await import('gsap')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      counters.forEach((counter) => {
        counter.textContent = counter.dataset.countDisplay ?? counter.dataset.countTo ?? ''
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            gsap.fromTo(
              entry.target,
              { y: 28, opacity: 0, filter: 'blur(10px)' },
              { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.72, ease: 'power3.out' }
            )
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    )

    elements.forEach((element) => observer.observe(element))

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const element = entry.target as HTMLElement
          const target = Number(element.dataset.countTo ?? 0)
          const suffix = element.dataset.countSuffix ?? ''
          const state = { value: 0 }

          gsap.to(state, {
            value: target,
            duration: 1.45,
            ease: 'power3.out',
            onUpdate: () => {
              element.textContent = `${Math.round(state.value)}${suffix}`
            }
          })

          counterObserver.unobserve(element)
        })
      },
      { threshold: 0.35 }
    )

    counters.forEach((counter) => counterObserver.observe(counter))
  })
}
