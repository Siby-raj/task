/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let n=heights.length;
    let a=[];
    let m,k;
    let result;
    let right=0,left=0,left_max=0,right_max=0;
    for(let i=0;i<n ;i++){
        while(i<n){
            left_max=heights[i];
            right_max=heights[i+1];
            if(left_max>right_max){
                left=left_max-right_max;
                left_max-=left;
                result=left_max+right_max;
                a.push(result)

            }
            else if(left_max<right_max){
                right=right_max-left_max;
                right_max-=right;
                result=right_max+left_max
                a.push(result)
            }
            else if(left_max===right_max){
                result=left_max+right_max;
                a.push(result)
            }
            else {
                
            }
            i++;
        }
            

        } 
        
        
        
      m=Math.max(...a);
    
      k=Math.max(...heights);
      if(m>n){
          result=m
      }
      else{
          result=n
      }
      return result

    }

heights=[2,1,5,6,2,3]
largestRectangleArea(heights)