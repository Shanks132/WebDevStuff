package com.shanks;

import static org.junit.Assert.*;

import org.junit.Test;

public class CalcTest {

	@Test
	public void test() {
		Calc c = new Calc ();
		int result = c.divide(15, 5);
		int expectedResult = 3;
		assertEquals(expectedResult,result);
	}

}
