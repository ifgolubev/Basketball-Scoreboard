let home_score_result = document.getElementById('home_score')
let guest_score_result = document.getElementById('guest_score')
home_score = 0
guest_score = 0

function home_plus_one() {
    home_score += 1
    home_score_result.innerText = home_score
}

function home_plus_two() {
    home_score += 2
    home_score_result.innerText = home_score
}

function home_plus_three() {
    home_score += 3
    home_score_result.innerText = home_score
}

function guest_plus_one() {
    guest_score += 1
    guest_score_result.innerText = guest_score
}

function guest_plus_two() {
    guest_score += 2
    guest_score_result.innerText = guest_score
}

function guest_plus_three() {
    guest_score += 3
    guest_score_result.innerText = guest_score
}

function new_game() {
    home_score = 0
    home_score_result.innerText = home_score
    guest_score = 0
    guest_score_result.innerText = guest_score
    
}