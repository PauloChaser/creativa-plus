export function initFileInput() {
  const inputs = document.querySelectorAll('.js-input-file');

  if (!inputs) {
    return
  }

  inputs.forEach((input) => {
    input.addEventListener('change', handleFileInputChange)
  })

  document.addEventListener('click', function(e) {
    const element = e.target;
    if (element.classList.contains('js-input-file-remove') || element.closest('.js-input-file-remove')) {
      const form = element.closest('form')
      const inputElement = form.querySelector('.js-input-file')
      const removeId = Number(element.dataset.id)
      const files = [...inputElement.files]

      files.splice(removeId, 1)

      inputElement.files = fileListItems(files)

      handleFileInputChange(undefined, inputElement)
    }
  })
}

function handleFileInputChange(e, inputElement) {
  const input = inputElement || e.currentTarget
  const files = input.files
  const count = files.length
  const area = document.querySelector('.js-input-files-area')

  area.innerHTML = ''

  for (let i = 0; i < count; i++) {
    area.innerHTML += renderFile(i, files[i].name);
  }
}

function renderFile(id, title) {
  return `<div class="requestAnOffer__inputFileItem js-attached-file" title="${title}">
            <svg class="requestAnOffer__inputFileItemIcon">
               <use href="/local/templates/creativa/spritemap.svg#icon-inputFileItem-Icon"/>
            </svg>
            <svg class="requestAnOffer__inputFileItemIconClose js-input-file-remove" data-id="${id}">
               <use href="/local/templates/creativa/spritemap.svg#icon-inputFileItem-IconClose"/>
            </svg>
            <span class="requestAnOffer__inputFileItemTitle">${title}</span>
          </div>`
}


function fileListItems (files) {
  let b = new ClipboardEvent("").clipboardData || new DataTransfer()
  for (let i = 0, len = files.length; i<len; i++) {
    b.items.add(files[i])
  }

  return b.files
}
