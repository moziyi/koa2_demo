class Message {
    constructor(obj) {
        if (isNaN(obj.alarmId) || obj.platName === undefined) {
            throw new Error("json缺少关键字段")
        }
        else {
            this.platName = obj.platName
            this.alarmId = obj.alarmId
            this.alarmStatus = !obj.alarmStatus ? `PROBLEM` : obj.alarmStatus
            this.alarmLevel = !obj.alarmLevel ? `Disaster` : obj.alarmLevel
            this.alarmTime = !obj.alarmTime ? new Date() : obj.alarmTime
            this.alarmModule = obj.alarmModule
            this.alarmTitle = obj.alarmTitle
            this.alarmContent = obj.alarmContent
        }
    }

    setSuccess() {
        this.alarmStatus = `SUCCESS`
    }
}

module.exports = Message