"use strict"
var rfc = require('./../RFC');
var mxk = require('./../mxk');
var assert = require('assert');


describe("rfc lib", function() {

    it("rule1 should return FOPK801006", function() {
        var name = "KARLA";
        var pLname = "FLORES";
        var mLname = "PACHECO";
        var bDate = "1980-10-06";

        var result = new rfc(name, pLname, mLname, bDate);

        assert.equal(result.rfc, "FOPK801006");
    });

    it("rule2 should return CELG770814", function() {
        var name = "GERARDO"
        var pLname = "CHELINI"
        var mLname = "LOPEZ"
        var bDate = "1977-08-14"

        var result = new rfc(name, pLname, mLname, bDate);

        assert.equal(result.rfc, "CELG770814");
    });

    it("rule3 should return AIJA620402", function() {
        var name = "JAQUELINE"
        var pLname = "AG"
        var mLname = "IBARRA"
        var bDate = "1962-04-02"

        var result = new rfc(name, pLname, mLname, bDate);

        assert.equal(result.rfc, "AIJA620402");
    });


    it("rule4 should return TUCS920311", function() {
        var name = "SUSANA"
        var pLname = "TURIN"
        var mLname = "CASTILLO SANTOS"
        var bDate = "1992-03-11"

        var result = new rfc(name, pLname, mLname, bDate);

        assert.equal(result.rfc, "TUCS920311");
    });

    it("rule5-1 should return GOZF781219", function() {
        var name = "FERNANDO XAVIER"
        var pLname = "GOMEZ"
        var mLname = "ZARATE"
        var bDate = "1978-12-19"

        var result = new rfc(name, pLname, mLname, bDate);

        assert.equal(result.rfc, "GOZF781219");
    });

    it("rule5-2 should return LOJP801007", function() {
        var name = "JOSE PEDRO"
        var pLname = "LOMAS"
        var mLname = "JUAREZ"
        var bDate = "1980-10-07"

        var result = new rfc(name, pLname, mLname, bDate);

        assert.equal(result.rfc, "LOJP801007");
    });

    it("rule5-3 should return LOBJ820418", function() {
        var name = "JOSE MARIA"
        var pLname = "LOPEZ"
        var mLname = "BAUTISTA"
        var bDate = "1982-04-18"

        var result = new rfc(name, pLname, mLname, bDate);

        assert.equal(result.rfc, "LOBJ820418");
    });

    it("rule6 should return REAN800109", function() {
        var name = "ANGEL"
        var pLname = "REYES"
        var mLname = ""
        var bDate = "1980-01-09"

        var result = new rfc(name, pLname, mLname, bDate);

        assert.equal(result.rfc, "REAN800109");
    });

    it("rule7 should return LOPS550225", function() {
        var name = "SARA"
        var pLname = "LOPEZ"
        var mLname = "PEREZ"
        var bDate = "1955-02-25"

        var result = new rfc(name, pLname, mLname, bDate);

        assert.equal(result.rfc, "LOPS550225");
    });

    it("rule8 should return ROSA801006", function() {
        var name = "ANGELES "
        var pLname = "DE LA ROSA"
        var mLname = "SANCHEZ"
        var bDate = "1980-10-06"

        var result = new rfc(name, pLname, mLname, bDate);

        assert.equal(result.rfc, "ROSA801006");
    });

    it("rule9 should return TUCS790311", function() {
        var name = "LIC. SANDRO"
        var pLname = "TURIN"
        var mLname = "CASTILLO SANTOS "
        var bDate = "1979-03-11"

        var result = new rfc(name, pLname, mLname, bDate);

        assert.equal(result.rfc, "TUCS790311");
    });

    it("rule10-1 should return PUTX800714", function() {
        var name = "OSCAR"
        var pLname = "PURO"
        var mLname = "TORRES"
        var bDate = "1980-07-14"

        var result = new rfc(name, pLname, mLname, bDate);

        assert.equal(result.rfc, "PUTX800714");
    });

    it("rule10-2 should return PENX701120", function() {
        var name = "ENRIQUE"
        var pLname = "PEÑA"
        var mLname = "NIETO"
        var bDate = "1970-11-20"

        var result = new rfc(name, pLname, mLname, bDate);

        assert.equal(result.rfc, "PENX701120");
    });

    it("rule10-3 should return PUTX870218", function() {
        var name = "AMELIA"
        var pLname = "PUERTA"
        var mLname = "TOBIAS"
        var bDate = "1987-02-18"

        var result = new rfc(name, pLname, mLname, bDate);

        assert.equal(result.rfc, "PUTX870218");
    });

    it("rul411 should return OMGA580925", function() {
        var name = "ALBERTO"
        var pLname = "OMS"
        var mLname = "GONZALEZ"
        var bDate = "1958-09-25"

        var result = new rfc(name, pLname, mLname, bDate);

        assert.equal(result.rfc, "OMGA580925");
    });

    it("rul412 should return MARA900105", function() {
        var name = "ANA"
        var pLname = "MC’CARTHY"
        var mLname = "ROMERO"
        var bDate = "1990-01-05"

        var result = new rfc(name, pLname, mLname, bDate);

        assert.equal(result.rfc, "MARA900105");
    });

});





describe("mkk lib", function(){
	it("rule1 should return FOPK801006", function() {
        var name = "KARLA";
        var pLname = "FLORES";
        var mLname = "PACHECO";
        var bDate = "1980-10-06";

        var result = mxk.getRFC(name, pLname, mLname, "06", "10", "1980");

        assert.equal(result, "FOPK801006");
    });

    it("rule2 should return CELG770814", function() {
        var name = "GERARDO"
        var pLname = "CHELINI"
        var mLname = "LOPEZ"
        var bDate = "1977-08-14"

        var result = mxk.getRFC(name, pLname, mLname, "14", "08", "1977");

        assert.equal(result, "CELG770814");
    });

    it("rule3 should return AIJA620402", function() {
        var name = "JAQUELINE"
        var pLname = "AG"
        var mLname = "IBARRA"
        var bDate = "1962-04-02"

        var result = mxk.getRFC(name, pLname, mLname, "02", "04", "1962");

        assert.equal(result, "AIJA620402");
    });


    it("rule4 should return TUCS920311", function() {
        var name = "SUSANA"
        var pLname = "TURIN"
        var mLname = "CASTILLO SANTOS"
        var bDate = "1992-03-11"

        var result = mxk.getRFC(name, pLname, mLname, "11", "03", "1992");

        assert.equal(result, "TUCS920311");
    });

    it("rule5-1 should return GOZF781219", function() {
        var name = "FERNANDO XAVIER"
        var pLname = "GOMEZ"
        var mLname = "ZARATE"
        var bDate = "1978-12-19"

        var result = mxk.getRFC(name, pLname, mLname, "19", "12", "1978");

        assert.equal(result, "GOZF781219");
    });

    it("rule5-2 should return LOJP801007", function() {
        var name = "JOSE PEDRO"
        var pLname = "LOMAS"
        var mLname = "JUAREZ"
        var bDate = "1980-10-07"

        var result = mxk.getRFC(name, pLname, mLname, "07", "10", "1980");

        assert.equal(result.rfc, "LOJP801007");
    });

    it("rule5-3 should return LOBJ820418", function() {
        var name = "JOSE MARIA"
        var pLname = "LOPEZ"
        var mLname = "BAUTISTA"
        var bDate = "1982-04-18"

        var result = mxk.getRFC(name, pLname, mLname, "18", "04", "1982");

        assert.equal(result, "LOBJ820418");
    });

    it("rule6 should return REAN800109", function() {
        var name = "ANGEL"
        var pLname = "REYES"
        var mLname = ""
        var bDate = "1980-01-09"

        var result = mxk.getRFC(name, pLname, mLname, "09", "01", "1980");

        assert.equal(result, "REAN800109");
    });

    it("rule7 should return LOPS550225", function() {
        var name = "SARA"
        var pLname = "LOPEZ"
        var mLname = "PEREZ"
        var bDate = "1955-02-25"

        var result = mxk.getRFC(name, pLname, mLname, "25", "02", "1955");

        assert.equal(result, "LOPS550225");
    });

    it("rule8 should return ROSA801006", function() {
        var name = "ANGELES "
        var pLname = "DE LA ROSA"
        var mLname = "SANCHEZ"
        var bDate = "1980-10-06"

        var result = mxk.getRFC(name, pLname, mLname, "06", "10", "1980");

        assert.equal(result, "ROSA801006");
    });

    it("rule9 should return TUCS790311", function() {
        var name = "LIC. SANDRO"
        var pLname = "TURIN"
        var mLname = "CASTILLO SANTOS "
        var bDate = "1979-03-11"

        var result = mxk.getRFC(name, pLname, mLname, "11", "03", "1979");

        assert.equal(result, "TUCS790311");
    });



	it("rule10-mjx should return PENX701120", function() {
        var name = "ENRIQUE"
        var pLname = "PEÑA"
        var mLname = "NIETO"
        var bDate = "1970-11-20"

        var result = mxk.getRFC(name, pLname, mLname, "20", "11", "1970");

        assert.equal(result, "PENX701120");
    });

})