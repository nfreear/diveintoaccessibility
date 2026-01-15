/**
 * Skip link fix (part 2), because of `<base href>` element!
 */

skipLink();

function skipLink () {
  const skipLink = document.querySelector('header a[ href ^= "#" ]');
  const targetID = new URL(skipLink.href).hash.replace('#', '');
  const targetElem = document.getElementById(targetID);

  console.assert(skipLink, 'skip link missing');
  console.assert(targetElem, 'skip target missing');
  console.debug('Skip link:', skipLink, targetID, targetElem);

  skipLink.addEventListener('click', (ev) => {
    ev.preventDefault();

    targetElem.setAttribute('tabindex', '-1');
    targetElem.focus();

    console.debug('Skip link click:', ev);
  });
}
