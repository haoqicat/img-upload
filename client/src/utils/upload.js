export const readUploadedFileAsDataURL = inputFile =>
  new Promise((resolve, reject) => {
    if (!inputFile.type.match('image.*')) {
      return reject(new DOMException('文件不是图片格式'))
    }

    const temporaryFileReader = new FileReader()

    temporaryFileReader.onerror = () => {
      temporaryFileReader.abort()
      reject(new DOMException('输入文件解析错误'))
    }

    temporaryFileReader.onload = () => {
      resolve(temporaryFileReader.result)
    }
    temporaryFileReader.readAsDataURL(inputFile)
  })
