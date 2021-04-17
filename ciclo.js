//Tu propio ciclo
function ciclo(a, funPrb, funAct, funCrp) {
	while (funPrb(a)) {
		funCrp(a);
		a = funAct(a);
	}
}

ciclo(3, (n) => n > 0, (n) => n - 1, console.log);
// → 3
// → 2
// → 1
