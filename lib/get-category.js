function getCategory(data) {
  if (data.text.length === 0) {
    return "";
  }

  return `?category=${data.text}`;
}

module.exports = { getCategory };
