const form_output = document.getElementById('form_output');
form_output.onsubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData(e.target);
    let {date, time} = Object.fromEntries(form_data.entries());
    
    // get times
    let start_times = Date.now();
    let end_times = new Date(date + ' ' + time);
    let order_time = Math.floor(Math.abs(end_times.getTime() - start_times));


    let total_sec = Math.floor(order_time / 1000);
   
    let total_min = Math.floor(total_sec / 60);
    let total_hour = Math.floor(total_min / 60);
    
    
    let total_day = Math.floor(total_hour / 24);

    let hour = total_hour - (total_day * 24);
    let min = total_min - (total_day * 24)-(hour*60*60);
    let sec = total_sec - (total_day * 24) - (hour * 60) - (min * 60);
    console.log(`${total_day}days:${hour}hour:${min}min:${sec}Sec`);
    
    
}
