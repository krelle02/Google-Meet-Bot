

const getTime = (date,time) => {
    const date_string = date + "T" + time + ":00"
    console.log(date_string)
    const curr_time = new Date()
    time = new Date(date_string)
    time = time.getTime()-curr_time.getTime()
    return time
  }

module.exports = getTime


