//KMP algorithm for pattern matching
function computeLPSArray(pat, M, lps)
	{
		var len = 0;
		var i = 1;
		lps[0] = 0; 
	
		// the loop calculates lps[i] for i = 1 to M-1
		while (i < M) {
			if (pat.charAt(i) == pat.charAt(len)) {
				len++;
				lps[i] = len;
                console.log("1",lps)
				i++;
			}
			else 
			{
				if (len != 0) {
					len = lps[len - 1];		
                    console.log("2",len)
				}
				else 
				{
					lps[i] = len;
                    console.log("3",lps)
					i++;
				}
			}
		}
       // console.log(lps)
	}
	
	function KMPSearch(pat,txt)
	{
		var M = pat.length;
		var N = txt.length;
		
		var lps = [];
		var j = 0; 
		computeLPSArray(pat, M, lps);
	
		var i = 0; // index for txt[]
		while ((N - i) >= (M - j)) {
			if (pat.charAt(j) == txt.charAt(i)) {
				j++;
				i++;
			}
			if (j == M) {
			    console.log(i-j)
				j = lps[j - 1];
			}
	
			// mismatch after j matches
			else if (i < N && pat.charAt(j) != txt.charAt(i)) {
				
				if (j != 0)
					j = lps[j - 1];
				else
					i = i + 1;
			}
		}
	}
	
	
    var txt = "ABABDABACDABABCABAB";
    var pat = "AABAACAABAA";

	KMPSearch(pat, txt)
