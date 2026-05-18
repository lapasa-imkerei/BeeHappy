document.addEventListener('DOMContentLoaded', function() {
    const monthYearE1 = document.getElementById('month-year');
    const daysE1 = document.getElementById('days');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const todayBtn = document.getElementById('today-btn');
    const eventPanel = document.getElementById('event-panel');
    const eventDateE1 = document.getElementById('event-date');
    const eventListE1 = document.getElementById('event-list');

    let currentDate = new Date();
    let selectedDate = null;

    //Beispiel Daten
    const events = {}

    function renderCalendar() {
        const firstDay = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1
        );

        const lastDay = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() +1,
            0
        );

        const prevLastDay = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
        );

        const firstDayIndex = firstDay.getDay();
        const lastDayIndex = lastDay.getDay();
        const nextDays = 7 - lastDayIndex - 1;

        const months = [
            "Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"
        ];

        monthYearE1.innerHTML = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

        let days = "";

        for (let x = firstDayIndex; x > 0; x--) {
            const prevDate = prevLastDay.getDate() - x + 1;
            const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${prevDate}`;
            const hasEvent = events[dateKey] !== undefined;

            days += `<div class="day other-month${hasEvent ? ' has-events' : ''}">${prevDate}</div>`;
        }
        
        for (let i = 1; i <= lastDay.getDate(); i++) {
            const date = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                i
            );

            const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${i}`;
            const hasEvent = events[dateKey] !== undefined;

            let dayClass = 'day';

            if (
                date.getDate() === new Date().getDate() &&
                date.getMonth() === new Date().getMonth() &&
                date.getFullYear() === new Date().getFullYear()
            ) {
                dayClass += 'today';
            }

            if (
                selectedDate &&
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth() &&
                date.getFullYear() === selectedDate.getFullYear()
            ) {
                dayClass += ' selected';
            }

            if (hasEvent) {
                dayClass += ' has-events';
            }

            days += `<div class="${dayClass}" data-date="${dateKey}">${i}</div>`;
        }

        for (let j = 1; j <= nextDays; j++) {
            const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth() + 2}-${j}`;
            const hasEvent = events[dateKey] !== undefined;

            days += `<div class="day other-month${hasEvent ? 'has-events' : ''}">${j}</div>`;
        }
    }
});
// 13:28