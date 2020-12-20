export const resetFormData = payload => {
  let newForm = {}
  Object.keys(payload).forEach(element => {
    switch (typeof payload[element]) {
      case 'string':
        newForm[element] = ''
        break
      case 'number':
        newForm[element] = 0
        break
      default:
        newForm[element] = null
        break
    }
  })
  return newForm
}

export const getErrorMessage = payload => {
  let errors = {}
  Object.keys(payload).forEach(element => {
    if (!element.includes('$')) {
      Object.keys(payload[element]).forEach(element1 => {
        if (!element1.includes('$')) {
          Object.keys(payload[element][element1]).forEach(element2 => {
            if (!element2.includes('$')) {
              if (!payload[element][element1][element2]) {
                switch (element2) {
                  case 'required':
                    errors[element1] = `Required`
                    break
                  case 'email':
                    errors[element1] = `Ivalid email`
                    break
                  case 'alphaNum':
                    errors[element1] = `Alpha-numaric ${element1} is Required`
                    break
                  case 'minLength':
                    errors[element1] = `Min-Length 8 is Required`
                    break

                  default:
                    errors[element1] = `Invalid`
                    break
                }
              }
            }
          })
        }
      })
    }
  })
  return errors
}
