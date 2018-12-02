function Light(id, state, type, name,modelid, manufacturerid, uniqueid, swversion) {
    this.id = id;
    this.state = state;
    this.type = type;
    this.name = name;
    this.modelid = modelid;
    this.manufacturerid = manufacturerid;
    this.uniqueid = uniqueid;
    this.swversion = swversion;
}

module.exports = Light;