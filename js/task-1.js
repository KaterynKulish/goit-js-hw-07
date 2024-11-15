const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const categName = category.querySelector('h2').textContent;
  console.log(`Category: ${categName}`);

  const categList = category.querySelectorAll('li').length;
  console.log(`Elements: ${categList}`);
});
