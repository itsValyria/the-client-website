function showfilter() {
  const form = document.querySelector('form')
  form.classList.toggle('show-filter')
  console.log('cool')

  const toggle = document.querySelector('.form__button')
    for (const svg of toggle.children) {
      svg.classList.toggle('show')
    }
}