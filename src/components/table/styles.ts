import styled from 'styled-components'

export const ContentBox = styled.div`
  padding: 30px 20px;
  border-radius: 10px;
  background-color: #FFFFFF;
  border: 1px solid #D5DFEC;

   @media (max-width: 768px) {
    padding:5px 0px;
  }
`

export const Toolbar = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: flex-end;
    @media (max-width: 768px) {
    padding:10px;
  }
`

export const SearchBar = styled.input`
  width: 200px;
  height: 36px;
  border: none;
  padding: 12px 16px;
  border-radius: 33px;
  background-color: #F6F6F6;
  color: #C5C5C5;
  font-weight: 500;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableRow = styled.tr`
  border-bottom: 1px solid #FAEFEA;
`

export const TableHead = styled.th`
  text-align: left;
  padding: 14px 10px;
  color: #E5B09B;
  font-weight: 600;
  font-size:13px;
`

export const TableCell = styled.td`
  padding: 10px;
  color: #657593;
  font-size:12px;
`

export const StatusDot = styled.span`
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 5px;
  margin-right: 8px;
`

export const Pagination = styled.div`
  gap: 10px;
  display: flex;
  margin-top:16px;
  justify-content: flex-end;
  font-size:12px;
  
  `