// SELECTED CANDIDATE

let selectedCandidate = null;


// VOTE COUNTS

let votes = {

    "Aadhira Kumar": 0,

    "Rahul Sharma": 0,

    "Priya Nair": 0

};


// SELECT CANDIDATE

function selectCandidate(candidate) {

    selectedCandidate = candidate;

    document.getElementById(
        "selectedCandidate"
    ).textContent = candidate;


    document.getElementById(
        "message"
    ).textContent = "";


    document
        .getElementById("vote")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// CAST VOTE

function castVote() {

    const message =
        document.getElementById("message");


    if (!selectedCandidate) {

        message.textContent =
            "Please select a candidate first.";

        message.style.color = "#dc2626";

        return;
    }


    votes[selectedCandidate]++;


    message.textContent =
        "Your vote has been submitted successfully!";

    message.style.color = "#16a34a";


    updateResults();


    // Disable voting after submission

    document.querySelector(
        ".vote-button"
    ).disabled = true;


    document.querySelector(
        ".vote-button"
    ).textContent = "Vote Submitted";

}


// UPDATE RESULTS

function updateResults() {

    const aadhiraVotes =
        votes["Aadhira Kumar"];

    const rahulVotes =
        votes["Rahul Sharma"];

    const priyaVotes =
        votes["Priya Nair"];


    document.getElementById(
        "aadhiraVotes"
    ).textContent = aadhiraVotes;


    document.getElementById(
        "rahulVotes"
    ).textContent = rahulVotes;


    document.getElementById(
        "priyaVotes"
    ).textContent = priyaVotes;


    const totalVotes =
        aadhiraVotes +
        rahulVotes +
        priyaVotes;


    if (totalVotes === 0) {
        return;
    }


    document.getElementById(
        "aadhiraProgress"
    ).style.width =
        (aadhiraVotes / totalVotes * 100) + "%";


    document.getElementById(
        "rahulProgress"
    ).style.width =
        (rahulVotes / totalVotes * 100) + "%";


    document.getElementById(
        "priyaProgress"
    ).style.width =
        (priyaVotes / totalVotes * 100) + "%";

}


// SCROLL TO VOTING

function goToVoting() {

    document
        .getElementById("vote")
        .scrollIntoView({
            behavior: "smooth"
        });

}