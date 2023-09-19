import { Fragment } from "react";

export const splitWordIntoLetters = (word, classNameWord = null, classNameLetter = null) => {
  const words = word.split(' ');
  return (
    words.map((word, wordIndex) => (
      <div key={wordIndex} className={classNameWord}>
        {Array.from({ length: 2 }, (_, i) => (
          <div key={i} aria-hidden={i === 1}>
            {word.split('').map((letter, letterIndex) => {
              const transitionDelay = `${0.1 * (wordIndex + letterIndex / word.length)}s`;
              return (
                <Fragment key={letterIndex}>
                  <span
                    className={classNameLetter}
                    style={{ transitionDelay }}
                  >
                    {letter}
                  </span>
                  {(wordIndex !== words.length - 1 && letterIndex === word.split('').length - 1) && (
                    '\u00A0'
                  )}
                </Fragment>
              );
            })}
          </div>
        ))}
      </div>
    ))
  );
};

export const removeMarkdown = (markdown) => {
  return markdown?.replace(/\*\*(.*?)\*\*/g, '$1');
}

export const removeHtmlTags = (data) => {
  return data.replace(/<[^>]*>/g, '');
}

export const portableTextToMarkdown = (node) => {
  if (node._type === 'span') {
    let text = node.text;
    if (node.marks && node.marks.includes('strong')) {
      text = `**${text}**`;
    }
    return text;
  }
  if (Array.isArray(node.children)) {
    return node.children.map(child => portableTextToMarkdown(child)).join('');
  }
  return '';
};

export const slugify = (text) => {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;',
    b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------',
    p = new RegExp(a.split('').join('|'), 'g');
  return text.toString().toLowerCase().replace(/\s+/g, '-').replace(p, c => b.charAt(a.indexOf(c))).replace(/&/g, '-i-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
};

export const smoothScroll = (e) => {
  e.preventDefault();
  const targetId = e.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ behavior: 'smooth' });
  history.pushState(null, '', targetId);
}