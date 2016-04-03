describe('put test', function () {

  // load the directive's module
  beforeEach(module('pouchdb.test'))

  var scope, db, rawDB

  beforeEach(inject(function ($window, $rootScope, pouchDB) {
    scope = $rootScope.$new()
    db = pouchDB('db')
    rawDB = new $window.PouchDB('db')
    spyOn(rawDB, 'put')
  }))


  // default test from https://github.com/angular-pouchdb/angular-pouchdb/blob/master/test/api.js#L49
  it('should wrap put', function(done) {

    var doc = { _id: '1' }

    db.put(doc)
      .then(function(response) { expect(response.ok).toBe(true) })
      .catch(function(error) { self.fail(error) })
      .finally(done)

  })


  it('should call original method', function(done) {

    var doc = { _id: '1' }

    db.put(doc)
      .then(function(response) {
        expect(rawDB.put).toHaveBeenCalledWith(doc)
      })
      .catch(function(error) { self.fail(error) })
      .finally(done)

  })
})
