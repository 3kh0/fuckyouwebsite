const replacements = {
  hackclub: "paintclub",
  "hack club": "paint club",
  HACKCLUB: "PAINTCLUB",
  "HACK CLUB": "PAINT CLUB",
};
function has_ancestor_class(node, class_name) {
  while (node) {
    if (node.classList && node.classList.contains(class_name)) {
      return true;
    }
    node = node.parentElement;
  }
  return false;
}

function replace_text(node) {
  for (var class_name of []) {
    if (has_ancestor_class(node, class_name)) {
      return;
    }
  }
  if (node.nodeType == Node.TEXT_NODE) {
    var text = node.textContent;
    for (var [target_word, replacement_word] of Object.entries(replacements)) {
      text = text.replace(target_word, replacement_word);
    }
    node.textContent = text;
  } else {
    node.childNodes.forEach(replace_text);
  }
}

var title = document.title;
for (var [target_word, replacement_word] of Object.entries(replacements)) {
  title = title.replace(target_word, replacement_word);
}

var observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      replace_text(node);
    });
  });
});
observer.observe(document.body, { childList: true, subtree: true });
