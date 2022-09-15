
//truthy falsy
let stokAda = true;

if (stokAda) {
    console.log('ada');
} else {
    console.log('kosong');
}

const calculator = (number1, number2, operation, bahasa = indonesia) => {
    const result = operation(number1, number2);
    bahasa(result);
  };
  
  const indonesia = (result) => {
    console.log(`hasilnya adalah ${result}`);
  };
  
  const english = (result) => {
    console.log(`the result is ${result}`);
  };
  
  const add = (number1, number2) => {
    return number1 + number2;
  };
  
  const subtract = (number1, number2) => {
    return number1 - number2;
  };
  
  const bagi = (number1, number2) => {
    return number1 / number2;
  };
  
  calculator(3, 9, add);
  calculator(42, 2, subtract, english);
  calculator(4, 2, bagi);
  
  console.log('\n')

const uploadImage = (imageFile, nextStep) => 
{
    console.log('Uploading ' + imageFile);
    const image = 'fs-' + imageFile;
    nextStep(image);
};

const cropImage = (image, nextStep) => 
{
    console.log('Cropping ' + image);
    const croppedImage = image + '-crop';
    nextStep(croppedImage);
};

const addWm = (croppedImage, nextStep) => 
{
    console.log('watermark ' + croppedImage);
    const wmImage = croppedImage + '-wm';
    nextStep(wmImage);
};

uploadImage("Selfie", (x) => {
    cropImage(x, (y) => {
        addWm(y, (z) => {
            console.log(z);
        });
    });
});



