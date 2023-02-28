export function timestampConverter(timestamp) {
        
        const date = new Date(timestamp * 1000);
        
        let hours = date.getHours();
        let minutes = date.getMinutes();
        
        let day = date.getDate()
        let month = date.getMonth()
        const year = date.getFullYear()

        if(day < 10){
            day = "0" + day
        }

        if(month < 10) {
            month = "0" + month
        }

        if(minutes < 10) {
            minutes = "0" + minutes
        }

        if(hours < 10) {
            hours = "0" + hours
        }
        
        const formattedTime = hours + ':' + minutes
        
        const formattedDate = day + "." + month + '.' + year
        
        return `Created: ${formattedDate} at ${formattedTime}`;
        }
        