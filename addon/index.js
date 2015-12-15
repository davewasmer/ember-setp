import Ember from 'ember';

const isNone = Ember.isNone;
const get = Ember.get;
const set = Ember.set;

export default function setp(target, path, value) {
  let segments = path.split('.');
  segments.pop(); // Don't see the actual value, use Ember.set for that
  segments.forEach((segment, i) => {
    let nextSegment = segments[i + 1];
    let currentPath = segments.slice(0, i + 1).join('.');
    if (isNone(get(target, currentPath))) {
      if (isNaN(parseInt(nextSegment, 10))) {
        set(target, currentPath, {});
      } else {
        set(target, currentPath, []);
      }
    }
  });
  return set(target, path, value);
}
