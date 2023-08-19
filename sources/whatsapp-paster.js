/*
 * whatsapp-paster
 * Copyright 2023 Paolo Lucchesi
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the “Software”),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */
async function paste(evt) {
  if (!isPressedCtrlV())
    return

  const messageBox = document.querySelector('[data-testid=conversation-compose-box-input]')
  console.debug('Selected inner box', messageBox)
  if (!isFocusedElement()) {
    console.debug('Message input box is not the currently focused element')
    return
  }

  console.debug('Trying to paste text from clipboard')
  const textToPaste = await navigator.clipboard.readText()

  console.debug('Pasting: ', textToPaste)
  document.execCommand('insertText', false, textToPaste);
  console.debug('Text from clipboard was inserted')

  function isPressedCtrlV() {
    return  evt.ctrlKey && evt.key === 'v'
  }

  function isFocusedElement() {
    return document.activeElement === messageBox
  }
}

document.addEventListener('keydown', paste);
