

const parseDate = (date) => {
    return date
    return date.replace(/-/g,"/");
  }

const getTime = (date,time) => {

    console.log(date,time)
    const new_date = parseDate(date)
    const date_string = new_date + "T" + time + ":00"
    
    const curr_date = new Date()
    date = new Date(date_string)
    time = date.getTime()-curr_date.getTime()
    return time
  }

module.exports = getTime


