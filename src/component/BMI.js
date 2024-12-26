import React, { useCallback, useState } from 'react'

function BMI() {


    const [age, setage] = useState()
    const [weight, setweight] = useState()
    const [height, setheight] = useState()
    const [bmi, setbmi] = useState()
    const [msg, setmsg] = useState('');

    const reload = () => {
        window.location.reload()
    }
    const handlecalculation = (e) => {
        e.preventDefault()

        if (weight === 0 || height === 0) {
            alert('hello please enter a valid number')
        }
        else {
            let bmiFomular = (weight / (height * height) * 703);
            setbmi(bmiFomular.toFixed(2))
        }
        if (bmi < 25) {
            setmsg('you are under weight')
        }
        else if (bmi >= 25 || bmi <= 30) {
            setmsg('you are healthy')
        }
        else {
            setmsg('you are unhealthy please seek for medician')
        }
    }
    return (


        <div className='container'>
            <div className='firstbigcontainer'>
                <div className='haddingbox'>
                    <div>
                        <h1>BMI Calculator</h1>
                    </div>
                </div>
                <div className='secoundbigcontainer'>
                    <form onSubmit={handlecalculation}>
                        <div>
                            <label className='age'> 
                                Age:
                            </label><br />
                            <input className='age' id='agebtn' type='number' placeholder='Age...' value={age} onChange={(e) => setage(e.target.value)} />
                        </div>
                        <div>
                            <label className='weight'>
                                Weight:
                            </label><br />
                            <input className='weight' id='weightbtn' type='number' placeholder='Weight...' value={weight} onChange={(e) => setweight(e.target.value)} />
                        </div>
                        <div>
                            <label className='height'>
                                Height:
                            </label><br />
                            <input className='height' id='heightbtn' type='number' placeholder='Height...' value={height} onChange={(e) => setheight(e.target.value)} />
                        </div>
                        <div>
                            <button type='submit'className='btn' >Calculate</button>
                            <button type='submit'className='btn1' onClick={reload}>Reload</button>
                        </div>
                        <div>
                            <h3 className='age'>Age:{age}</h3>
                            <h3 className='bmi'>Your BMI is:{bmi}</h3>
                            <p className='p-msg'>Result:{msg}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BMI