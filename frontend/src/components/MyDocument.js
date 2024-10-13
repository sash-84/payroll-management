import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Helvetica',
    fontSize: 12,
    color: '#333',
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  section: {
    margin: 10,
    padding: 10,
    border: '1px solid #e0e0e0',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  text: {
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
    margin: '0 auto',
  },
});

const MyDocument = ({ employee, salary }) => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* <Image style={styles.logo} src="path/to/logo.png" /> */}

      <Text style={styles.header}>Employee Payslip</Text>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Employee Information:</Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Name:</Text> {employee.first_name} {employee.last_name}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Email:</Text> {employee.email}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Designation:</Text> {employee.designation}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Salary Details:</Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Basic Salary:</Text> {salary.basic_salary}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>HRA:</Text> {salary.hra}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>DA:</Text> {salary.da}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Bonus:</Text> {salary.bonus}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Deductions:</Text> {salary.deductions}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Gross Salary:</Text> {salary.gross_salary}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Net Salary:</Text> {salary.net_salary}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Payment Date:</Text> {salary.payment_date}
        </Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;