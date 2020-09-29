function validatePIN (pin) {
    if(/^\d{4}$|^\d{6}$/.test(pin)){
      return true
    } else {
      return false
    }
  }