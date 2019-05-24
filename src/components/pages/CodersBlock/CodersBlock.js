import React from 'react';
import Input from '../../UI/Input/Input';
import Select from '../../UI/Select/Select';
import { Context } from '../../Provider/Provider';
import './CodersBlock.scss';
import FormErrors from '../../UI/FormErrors/FormErrors';

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
          },
          validation: {
            codersBlock: {
              formValid,
              formErrors,
              formErrors: { expYearsError, salaryError, ageError }
            }
          }
        },
        codersChangeHandler,
        addCoderIntoDataBase
      }) => {
        let expYearsCls = 'coders-block__input';
        let salaryCls = 'coders-block__input';
        let ageCls = 'coders-block__input';
        if (expYearsError !== '') {
          expYearsCls += ' coders-block__input--error';
        }
        if (salaryError !== '') {
          salaryCls += ' coders-block__input--error';
        }
        if (ageError !== '') {
          ageCls += ' coders-block__input--error';
        }
        return (
          <div className='coders-block'>
            <h2 className='coders-block__title'>Codder's block</h2>
            <form
              className='coders-block__reg-submit'
              onSubmit={addCoderIntoDataBase}
            >
              <label>
                Choose sex
                <Select
                  selectClassName='coders-block__select'
                  selectWrapClassName='coders-block__select-wrap'
                  selectButtonClassName='coders-block__select-button'
                  selectButtonValue={sex}
                  selectName='sex'
                  selectValue={sex}
                  selectInfo={{
                    select: '--select--',
                    male: 'Male',
                    female: 'Female'
                  }}
                  selectHandler={codersChangeHandler}
                />
              </label>

              <label>
                Choose position
                <Select
                  selectClassName='coders-block__select'
                  selectWrapClassName='coders-block__select-wrap'
                  selectButtonClassName='coders-block__select-button'
                  selectButtonValue={position}
                  selectName='position'
                  selectValue={position}
                  selectInfo={{
                    select: '--select--',
                    'Junior Front End Developer': 'Junior Front End Developer',
                    'Middle Front End Developer': 'Middle Front End Developer',
                    'Senior Front End Developer': 'Senior Front End Developer'
                  }}
                  selectHandler={codersChangeHandler}
                />
              </label>

              <Input
                labelClassName='coders-block__label'
                inputClassName={expYearsCls}
                labelName='Experience in years'
                inputType='text'
                inputName='experienceYears'
                inputValue={experienceYears}
                inputChangeHandler={codersChangeHandler}
                inputPlaceholder='Your experience years..'
              />

              <label>
                Choose experience in months
                <Select
                  selectClassName='coders-block__select'
                  selectWrapClassName='coders-block__select-wrap'
                  selectButtonClassName='coders-block__select-button'
                  selectButtonValue={experienceMonths}
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
                  selectHandler={codersChangeHandler}
                />
              </label>

              <Input
                labelClassName='coders-block__label'
                inputClassName={salaryCls}
                labelName='Salary'
                inputType='text'
                inputName='salary'
                inputValue={salary}
                inputChangeHandler={codersChangeHandler}
                inputPlaceholder='Your salary..'
              />
              <Input
                labelClassName='coders-block__label'
                inputClassName='coders-block__input'
                labelName='Previous experience'
                inputType='text'
                inputName='prevExperience'
                inputValue={prevExperience}
                inputChangeHandler={codersChangeHandler}
                inputPlaceholder='Your previous experience..'
              />
              <Input
                labelClassName='coders-block__label'
                inputClassName={ageCls}
                labelName='Age'
                inputType='text'
                inputName='age'
                inputValue={age}
                inputChangeHandler={codersChangeHandler}
                inputPlaceholder='Enter your age..'
              />
              <div>
                <h4 className='coders-block__subtitle'>Your skills</h4>
                <label>
                  Choose JS skill
                  <Select
                    selectClassName='coders-block__select'
                    selectWrapClassName='coders-block__select-wrap'
                    selectButtonClassName='coders-block__select-button'
                    selectButtonValue={JS}
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
                    selectHandler={codersChangeHandler}
                  />
                </label>
                <label>
                  Choose IDE skill
                  <Select
                    selectClassName='coders-block__select'
                    selectWrapClassName='coders-block__select-wrap'
                    selectButtonClassName='coders-block__select-button'
                    selectButtonValue={IDE}
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
                    selectHandler={codersChangeHandler}
                  />
                </label>

                <label>
                  Choose Bundlers skill
                  <Select
                    selectClassName='coders-block__select'
                    selectWrapClassName='coders-block__select-wrap'
                    selectButtonClassName='coders-block__select-button'
                    selectButtonValue={bundlers}
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
                    selectHandler={codersChangeHandler}
                  />
                </label>

                <label>
                  Choose HTML/CSS skill
                  <Select
                    selectClassName='coders-block__select'
                    selectWrapClassName='coders-block__select-wrap'
                    selectButtonClassName='coders-block__select-button'
                    selectButtonValue={HtmlCss}
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
                    selectHandler={codersChangeHandler}
                  />
                </label>

                <label>
                  Choose preprocessors skill
                  <Select
                    selectClassName='coders-block__select'
                    selectWrapClassName='coders-block__select-wrap'
                    selectButtonClassName='coders-block__select-button'
                    selectButtonValue={preprocessors}
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
                    selectHandler={codersChangeHandler}
                  />
                </label>

                <label>
                  Choose HTML/CSS libraries skill
                  <Select
                    selectClassName='coders-block__select'
                    selectWrapClassName='coders-block__select-wrap'
                    selectButtonClassName='coders-block__select-button'
                    selectButtonValue={HtmlCssLibs}
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
                    selectHandler={codersChangeHandler}
                  />
                </label>

                <label>
                  Choose JS libraries skill
                  <Select
                    selectClassName='coders-block__select'
                    selectWrapClassName='coders-block__select-wrap'
                    selectButtonClassName='coders-block__select-button'
                    selectButtonValue={JSlibs}
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
                    selectHandler={codersChangeHandler}
                  />
                </label>
              </div>

              <Input
                inputDisabled={!formValid}
                inputClassName='coders-block__submit'
                inputType='submit'
                inputValue='Register'
              />
              <FormErrors formErrors={formErrors} />
            </form>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default CodersBlock;
