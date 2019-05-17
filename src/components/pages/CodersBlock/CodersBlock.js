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
              formErrors: {
                sexError,
                positionError,
                expYearsError,
                expMonthsError,
                salaryError,
                ageError,
                jsError,
                ideError,
                bundlersError,
                htmlCssError,
                preprocessorsError,
                htmlCssLibsError,
                jsLibsError
              }
            }
          }
        },
        codersChangeHandler,
        addCoderIntoDataBase
      }) => {
        console.log(formErrors);
        return (
          <div className='coders-block'>
            <h2 className='coders-block__title'>Codder's block</h2>
            <form
              className='coders-block__reg-submit'
              onSubmit={addCoderIntoDataBase}
            >
              <Select
                selectClassName='coders-block__select'
                selectWrapClassName='coders-block__select-wrap'
                selectButtonClassName='coders-block__select-button'
                selectButtonValue='Choose sex'
                selectName='sex'
                selectValue={sex}
                selectInfo={{
                  select: '--select--',
                  male: 'Male',
                  female: 'Female'
                }}
                selectHandler={codersChangeHandler}
              />

              <Select
                selectClassName='coders-block__select'
                selectWrapClassName='coders-block__select-wrap'
                selectButtonClassName='coders-block__select-button'
                selectButtonValue='Choose position'
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

              <Input
                labelClassName='coders-block__label'
                inputClassName='coders-block__input'
                labelName='Experience in years'
                inputType='text'
                inputName='experienceYears'
                inputValue={experienceYears}
                inputChangeHandler={codersChangeHandler}
                inputPlaceholder='Your experience years..'
              />

              <Select
                selectClassName='coders-block__select'
                selectWrapClassName='coders-block__select-wrap'
                selectButtonClassName='coders-block__select-button'
                selectButtonValue='Choose experience in months'
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

              <Input
                labelClassName='coders-block__label'
                inputClassName='coders-block__input'
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
                inputClassName='coders-block__input'
                labelName='Age'
                inputType='text'
                inputName='age'
                inputValue={age}
                inputChangeHandler={codersChangeHandler}
                inputPlaceholder='Enter your age..'
              />
              <div>
                <h4 className='coders-block__subtitle'>Your skills</h4>
                <Select
                  selectClassName='coders-block__select'
                  selectWrapClassName='coders-block__select-wrap'
                  selectButtonClassName='coders-block__select-button'
                  selectButtonValue='Choose JS skill'
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
                <Select
                  selectClassName='coders-block__select'
                  selectWrapClassName='coders-block__select-wrap'
                  selectButtonClassName='coders-block__select-button'
                  selectButtonValue='Choose IDE skill'
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

                <Select
                  selectClassName='coders-block__select'
                  selectWrapClassName='coders-block__select-wrap'
                  selectButtonClassName='coders-block__select-button'
                  selectButtonValue='Choose Bundlers skill'
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

                <Select
                  selectClassName='coders-block__select'
                  selectWrapClassName='coders-block__select-wrap'
                  selectButtonClassName='coders-block__select-button'
                  selectButtonValue='Choose HTML/CSS skill'
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

                <Select
                  selectClassName='coders-block__select'
                  selectWrapClassName='coders-block__select-wrap'
                  selectButtonClassName='coders-block__select-button'
                  selectButtonValue='Choose preprocessors skill'
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

                <Select
                  selectClassName='coders-block__select'
                  selectWrapClassName='coders-block__select-wrap'
                  selectButtonClassName='coders-block__select-button'
                  selectButtonValue='Choose HTML/CSS libraries skill'
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

                <Select
                  selectClassName='coders-block__select'
                  selectWrapClassName='coders-block__select-wrap'
                  selectButtonClassName='coders-block__select-button'
                  selectButtonValue='Choose JS libraries skill'
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
