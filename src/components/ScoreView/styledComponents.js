import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: space-between;
  aligin-item: center;
  padding: 10px;
  width: 80%;
  border-color: #ffffff;
`

export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreName = styled.h1`
  color: white;
  font-size: 20px;
  margin-top: 0px;
`
export const ScoreBoard = styled(ScoreNameContainer)`
  background-color: white;
`

export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 20px;
  margin-bottom: 0px;
`
export const ScoreResult = styled.p`
  color: #223a5f;
  font-size: 20px;
  margin-bottom: 0px;
`
