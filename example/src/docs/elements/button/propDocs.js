export default [
  {
    name: 'type',
    default: '',
    type: 'enum',
    description: '<code>primary</code>, <code>secondary</code>'
  },
  {
    name: 'size',
    default: '',
    type: 'enum',
    description:
      '<code>small</code>, <code>medium</code>, <code>large</code>, <code>x-large</code>'
  },
  {
    name: 'text',
    default: '',
    type: 'string',
    description: ''
  },
  {
    name: 'color',
    default: '',
    type: 'string',
    description: ''
  },
  {
    name: 'fluid',
    default: '',
    type: 'bool',
    description: ''
  },
  {
    name: 'icon',
    default: '',
    type: 'string',
    description: 'Icon component per <code>Icon</code> component'
  },
  {
    name: 'iconFloat',
    default: '',
    type: 'enum',
    description: '<code>left</code>, <code>right</code>'
  },
  {
    name: 'inverted',
    default: '',
    type: "bool|string('transparent')",
    description: ''
  },
  {
    name: 'loading',
    default: '',
    type: 'bool',
    description: ''
  },
  {
    name: 'disabled',
    default: '',
    type: 'bool',
    description: ''
  },
  {
    name: 'skeleton',
    default: '',
    type: 'bool',
    description: 'Adds a skeleton overlay to the element.'
  },
  {
    name: 'onClick',
    default: '',
    type: 'func',
    description: ''
  },
  {
    name: 'withLinkProps',
    default: '',
    type: 'Util',
    description: 'Props per <code>withLinkProps</code> util'
  }
];
