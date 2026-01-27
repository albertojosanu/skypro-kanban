import { GlobalStyle } from "../../index.styled.js";
import {
  SCalendar,
  SCalendar__ttl,
  SCalendar__nav,
  SCalendar__period,
  SSubttl,
  SCalendar__block,
  SCalendar__month,
  SNav__actions,
  SNav__action,
  SCalendar__content,
  SCalendar__daysNames,
  SCalendar__dayName,
  SCalendar__cells,
  SCalendar__cell,
  S_otherMonth,
  S_cellDay,
  S_current,
  S_weekend,
  SCalendar__p,
  SDateEnd,
} from "./Calendar.styled.js";

function Calendar() {
  return (
    <>
      <GlobalStyle />
      <SCalendar>
        <SCalendar__ttl>
          <SSubttl>Даты</SSubttl>
        </SCalendar__ttl>
        <SCalendar__block>
          <SCalendar__nav>
            <SCalendar__month>Сентябрь 2023</SCalendar__month>
            <SNav__actions>
              <SNav__action data-action="prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                >
                  <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                </svg>
              </SNav__action>
              <SNav__action data-action="next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                >
                  <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                </svg>
              </SNav__action>
            </SNav__actions>
          </SCalendar__nav>
          <SCalendar__content>
            <SCalendar__daysNames>
              <SCalendar__dayName>пн</SCalendar__dayName>
              <SCalendar__dayName>вт</SCalendar__dayName>
              <SCalendar__dayName>ср</SCalendar__dayName>
              <SCalendar__dayName>чт</SCalendar__dayName>
              <SCalendar__dayName>пт</SCalendar__dayName>
              <SCalendar__dayName className="-weekend-">сб</SCalendar__dayName>
              <SCalendar__dayName className="-weekend-">вс</SCalendar__dayName>
            </SCalendar__daysNames>
            <SCalendar__cells>
              <SCalendar__cell>
                <S_otherMonth>28</S_otherMonth>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_otherMonth>29</S_otherMonth>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_otherMonth>30</S_otherMonth>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>31</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>1</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>
                  <S_weekend>2</S_weekend>
                </S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>
                  <S_weekend>3</S_weekend>
                </S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>4</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>5</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>6</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>7</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>
                  <S_current>8</S_current>
                </S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>
                  <S_weekend>9</S_weekend>
                </S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>
                  <S_weekend>10</S_weekend>
                </S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>11</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>12</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>13</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>14</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>15</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>
                  <S_weekend>16</S_weekend>
                </S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>
                  <S_weekend>17</S_weekend>
                </S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>18</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>19</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>20</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>21</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>22</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>
                  <S_weekend>23</S_weekend>
                </S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>
                  <S_weekend>24</S_weekend>
                </S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>25</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>26</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>27</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>28</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>29</S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_cellDay>
                  <S_weekend>30</S_weekend>
                </S_cellDay>
              </SCalendar__cell>
              <SCalendar__cell>
                <S_otherMonth>
                  <S_weekend>1</S_weekend>
                </S_otherMonth>
              </SCalendar__cell>
            </SCalendar__cells>
          </SCalendar__content>

          <input type="hidden" id="datepick_value" value="08.09.2023" />
          <SCalendar__period>
            <SCalendar__p>
              <SDateEnd>
                Выберите срок исполнения <span className="date-control"></span>.
              </SDateEnd>
            </SCalendar__p>
          </SCalendar__period>
        </SCalendar__block>
      </SCalendar>
    </>
  );
}

export default Calendar;
