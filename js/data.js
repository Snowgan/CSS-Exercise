const CASES_DATA = {
  centerHor: 1,
  centerVer: 1,
};

var centerHorData = {
  caseIdx: 1,
  methods: [{
    value: 1,
    code: '.parent{text-align: center;}\n.child{display: inline-block;}'
  }, {
    value: 2,
    code: '.child{width: 50px; margin-left: auto; margin-right: auto;}'
  }, {
    value: 3,
    code: '.parent{position: relative;}\n.child{position: absolute; left: 50%; transform: translateX(-50%);}'
  }, {
    value: 4,
    code: '.parent{display: flex; justify-content: center;}'
  }, {
    value: 0,
    code: 'None'
  }]
}

var centerVerData = {
  caseIdx: 2,
  methods: [{
    value: 1,
    code: '.parent{line-height: 10rem;/*Equal to parent height*/}\n.child{display: inline; vertical-align: middle;}'
  }, {
    value: 2,
    code: '.parent{line-height: 10rem;/*Equal to parent height*/}\n.child{display: inline-block; vertical-align: middle; line-height: 5rem;/*Equal to child height*/}'
  }, {
    value: 3,
    code: '.parent{display: table-cell; vertical-align: middle;}'
  }, {
    value: 4,
    code: '.parent{position: relative;}\n.child{position: absolute; top: 50%; transform: translateY(-50%);}'
  }, {
    value: 5,
    code: '.parent{display: flex; align-items: center;}'
  }, {
    value: 0,
    code: 'None'
  }]
}