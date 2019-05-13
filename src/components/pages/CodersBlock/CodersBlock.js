import React from 'react';
import Input from '../../UI/Input/Input';
import Select from '../../UI/Select/Select';
import { Context } from '../../Provider/Provider';

const CodersBlock = () => {
  return (
    <Context.Consumer>
      {({
        state: {
          codersBlock: {
            sex,
            position,
            experienceYears,
            experienceMonths,
            salary,
            prevExperience,
            age,
            skills: {
              JS,
              IDE,
              bundlers,
              HtmlCss,
              preprocessors,
              HtmlCssLibs,
              JSlibs
            }
          }
        },
        changeHandler,
        addCoderIntoDataBase
      }) => {
        return (
          <div>
            <h3>Codder's block</h3>
            <form onSubmit={addCoderIntoDataBase}>
              <div>
                <Select
                  labelName='Sex'
                  selectName='sex'
                  selectValue={sex}
                  selectInfo={{
                    select: '--select--',
                    male: 'Male',
                    female: 'Female'
                  }}
                  selectHandler={changeHandler}
                />
              </div>
              <div>
                <Select
                  labelName='Position'
                  selectName='position'
                  selectValue={position}
                  selectInfo={{
                    select: '--select--',
                    'Junior Front End Developer': 'Junior Front End Developer',
                    'Middle Front End Developer': 'Middle Front End Developer',
                    'Senior Front End Developer': 'Senior Front End Developer'
                  }}
                  selectHandler={changeHandler}
                />
              </div>
              <div>
                <Input
                  labelName='Experience years'
                  inputType='text'
                  inputName='experienceYears'
                  inputValue={experienceYears}
                  inputChangeHandler={changeHandler}
                  inputPlaceholder='Your experience years..'
                />
              </div>
              <div>
                <Select
                  labelName='Experience in months'
                  selectName='experienceMonths'
                  selectValue={experienceMonths}
                  selectInfo={{
                    select: '--select--',
                    '0': '0',
                    '1': '1',
                    '2': '2',
                    '3': '3',
                    '4': '4',
                    '5': '5',
                    '6': '6',
                    '7': '7',
                    '8': '8',
                    '9': '9',
                    '10': '10',
                    '11': '11',
                    '12': '12'
                  }}
                  selectHandler={changeHandler}
                />
              </div>
              <div>
                <Input
                  labelName='Salary'
                  inputType='text'
                  inputName='salary'
                  inputValue={salary}
                  inputChangeHandler={changeHandler}
                  inputPlaceholder='Your salary..'
                />
              </div>
              <div>
                <label>
                  Previous experience
                  <textarea
                    name='prevExperience'
                    value={prevExperience}
                    cols='30'
                    rows='10'
                    onChange={changeHandler}
                  />
                </label>
              </div>
              <div>
                <Input
                  labelName='Age'
                  inputType='text'
                  inputName='age'
                  inputValue={age}
                  inputChangeHandler={changeHandler}
                  inputPlaceholder='Enter your age..'
                />
              </div>
              <div>
                <h4>Your skills</h4>
                <div>
                  <Select
                    labelName='JS skills'
                    selectName='JS'
                    selectValue={JS}
                    selectInfo={{
                      '0': 'Never used',
                      '1': 'Superficial, used several times',
                      '2': 'Passable, use from time to time ',
                      '3': 'Normal, use often',
                      '4': 'Extremely well, use frequently',
                      '5': 'Perfect, use all the time'
                    }}
                    selectHandler={changeHandler}
                  />
                </div>
                <div>
                  <Select
                    labelName='IDE skills'
                    selectName='IDE'
                    selectValue={IDE}
                    selectInfo={{
                      '0': 'Never used',
                      '1': 'Superficial, used several times',
                      '2': 'Passable, use from time to time ',
                      '3': 'Normal, use often',
                      '4': 'Extremely well, use frequently',
                      '5': 'Perfect, use all the time'
                    }}
                    selectHandler={changeHandler}
                  />
                </div>
                <div>
                  <Select
                    labelName='Bundlers skills'
                    selectName='bundlers'
                    selectValue={bundlers}
                    selectInfo={{
                      '0': 'Never used',
                      '1': 'Superficial, used several times',
                      '2': 'Passable, use from time to time ',
                      '3': 'Normal, use often',
                      '4': 'Extremely well, use frequently',
                      '5': 'Perfect, use all the time'
                    }}
                    selectHandler={changeHandler}
                  />
                </div>
                <div>
                  <Select
                    labelName='HTML/CSS skills'
                    selectName='HtmlCss'
                    selectValue={HtmlCss}
                    selectInfo={{
                      '0': 'Never used',
                      '1': 'Superficial, used several times',
                      '2': 'Passable, use from time to time ',
                      '3': 'Normal, use often',
                      '4': 'Extremely well, use frequently',
                      '5': 'Perfect, use all the time'
                    }}
                    selectHandler={changeHandler}
                  />
                </div>
                <div>
                  <Select
                    labelName='Preprocessors skills'
                    selectName='preprocessors'
                    selectValue={preprocessors}
                    selectInfo={{
                      '0': 'Never used',
                      '1': 'Superficial, used several times',
                      '2': 'Passable, use from time to time ',
                      '3': 'Normal, use often',
                      '4': 'Extremely well, use frequently',
                      '5': 'Perfect, use all the time'
                    }}
                    selectHandler={changeHandler}
                  />
                </div>
                <div>
                  <Select
                    labelName='HTML/CSS libraries skills'
                    selectName='HtmlCssLibs'
                    selectValue={HtmlCssLibs}
                    selectInfo={{
                      '0': 'Never used',
                      '1': 'Superficial, used several times',
                      '2': 'Passable, use from time to time ',
                      '3': 'Normal, use often',
                      '4': 'Extremely well, use frequently',
                      '5': 'Perfect, use all the time'
                    }}
                    selectHandler={changeHandler}
                  />
                </div>
                <div>
                  <Select
                    labelName='JS libraries skills'
                    selectName='JSlibs'
                    selectValue={JSlibs}
                    selectInfo={{
                      '0': 'Never used',
                      '1': 'Superficial, used several times',
                      '2': 'Passable, use from time to time ',
                      '3': 'Normal, use often',
                      '4': 'Extremely well, use frequently',
                      '5': 'Perfect, use all the time'
                    }}
                    selectHandler={changeHandler}
                  />
                </div>
              </div>
              <div>
                <Input inputType='submit' inputValue='Register' />
              </div>
            </form>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default CodersBlock;
