function calculateAge() {
    var day = parseInt(document.getElementById('day').value);
    var month = parseInt(document.getElementById('month').value);
    var year = parseInt(document.getElementById('year').value);

    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth() + 1;
    var currentDay = today.getDate();

    var ageYears = currentYear - year;
    var ageMonths = currentMonth - month;
    var ageDays = currentDay - day;

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        var tempDate = new Date(currentYear, currentMonth - 1, 0);
        ageDays = tempDate.getDate() - day + currentDay;
        ageMonths--;
    }

    var ageString = ageYears + " YEARS " + ageMonths + " MONTHS " + ageDays + " DAYS AGO";

    document.getElementById('ageDisplay').textContent = ageString;
}