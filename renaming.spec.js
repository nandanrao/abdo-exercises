const chai = require('chai')
chai.should()

const { renameTitle } = require('./renaming')

describe('renameTitle', () => {
  it('removes the first part of the title and underscores', () => {

    const title = 'PRBA30_Blue_Princess'
    const expected = 'Blue Princess'
    
    const res = renameTitle(title)
    res.should.equal(expected)
    
  })
})
