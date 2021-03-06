package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table

public class Schedule {
	 @Id  
	 @GeneratedValue(strategy=GenerationType.AUTO)  
	private int s_id;  
	 
	 
	 public Schedule(int s_id, String s_name) {
		super();
		this.s_id = s_id;
		this.s_name = s_name;
	}
	private String s_name;
	public int getS_id() {
		return s_id;
	}
	public void setS_id(int s_id) {
		this.s_id = s_id;
	}
	public String getS_name() {
		return s_name;
	}
	public void setS_name(String s_name) {
		this.s_name = s_name;
	}  
	 
}
